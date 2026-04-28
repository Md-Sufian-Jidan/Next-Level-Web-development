import { getAllSpecialties } from "@/services/doctor.services";
import { QueryClient } from "@tanstack/react-query";

const ConsultationPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) => {

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["specialties"],
    queryFn: getAllSpecialties,
    staleTime: 1000 * 60 * 60 * 6,
    gcTime: 1000 * 60 * 60 * 24,
  });

  return (
    <div>Consultation page</div>
  );
}

export default ConsultationPage