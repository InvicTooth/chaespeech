import Image from 'next/image';

interface MediaProps {
	src?: string;
	file?: File;
	size: number;
}

// 이미지 렌더링 함수
function renderImage(src: string, size: number) {
	return (
		<div className="relative">
			<Image src={src} alt="alt" width={size} height={size} />
		</div>
	);
}

// 비디오 렌더링 함수
function renderVideo(src: string, type: string, size: number) {
	return (
		<video controls width={size} height={size}>
			<source src={src} type={type} />
			Your browser does not support the video tag.
		</video>
	);
}

// 오디오 렌더링 함수
function renderAudio(src: string, type: string) {
	return (
		<audio controls>
			<source src={src} type={type} />
			Your browser does not support the audio tag.
		</audio>
	);
}

export default function Media({ src, file, size }: MediaProps) {
	if (!src && !file) {
		return null;
	}

	let mediaType: string | null = null;
	let fileExtension: string | undefined = undefined;

	if (src) {
		fileExtension = src.split(".").pop()?.toLowerCase();
		if (fileExtension) {
			if (
				["jpg", "jpeg", "png", "gif", "webp", "svg"].includes(fileExtension)
			) {
				mediaType = "image";
			} else if (["mp4", "webm", "ogg"].includes(fileExtension)) {
				mediaType = "video";
			} else if (["mp3", "wav", "ogg", "m4a"].includes(fileExtension)) {
				mediaType = "audio";
			}
		}
	} else {
		mediaType = file!.type;
		src = URL.createObjectURL(file!);
	}

	if (!mediaType) {
		return <div>Invalid media type</div>;
	}

	if (mediaType.startsWith("image/")) {
		return renderImage(src, size);
	}

	if (mediaType.startsWith("video/")) {
		return renderVideo(src, mediaType, size);
	}

	if (mediaType.startsWith("audio/")) {
		return renderAudio(src, mediaType);
	}

	if (mediaType === "image") {
		return renderImage(src, size);
	}

	if (mediaType === "video") {
		return renderVideo(src, `video/${fileExtension}`, size);
	}

	if (mediaType === "audio") {
		return renderAudio(src, `audio/${fileExtension}`);
	}

	return <div>Unsupported media type</div>;
}
