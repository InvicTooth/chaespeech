import { getProfile } from "@/app/lib/profile";
import ProfileForm from "@/app/ui/profile/profile-form";

export default async function ProfilePage() {
	const profile = await getProfile();

	return <ProfileForm initialProfile={profile} />;
}
