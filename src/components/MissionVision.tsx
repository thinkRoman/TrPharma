import { Container } from "@/components/Container";

export function MissionVision() {
  return (
    <Container className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-2xl font-semibold mb-4">MISSION</h3>
          <p className="text-gray-600 mb-4">
            Our mission at TrPharma is to harness our firsthand medical expertise to develop and provide
            unparalleled, patient-centered healthcare products and services. By intimately understanding healthcare
            challenges, we commit to improving patient outcomes and enhancing the quality of life for all we serve.
          </p>
        </div>
        <div>
          <h3 className="text-2xl font-semibold mb-4">VISION</h3>
          <p className="text-gray-600">
            TrPharma envisions a world where every individual has access to personalized, innovative healthcare
            solutions, empowering them to live their healthiest lives. We aim to revolutionize the healthcare
            landscape by leveraging our unique insights as doctors, to bring forth treatments that address the
            nuanced needs of diverse communities.
          </p>
        </div>
      </div>
    </Container>
  )
}