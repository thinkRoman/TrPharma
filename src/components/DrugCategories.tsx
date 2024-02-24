import { Container } from '@/components/Container';
import { PlusIcon } from '@/components/icons/PlusIcon';

export function DrugCategories() {
  return (
    <div className='bg-gray-100'>
      <Container className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
        <h3 className='text-2xl font-semibold text-center mb-6'>
          SOME OF OUR BEST SELLING DRUG CATEGORIES
        </h3>
        <p className='text-center text-gray-600 mb-8'>
          We guarantee the highest quality and efficacy of our products.
        </p>
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6'>
          <div className='flex flex-col items-center text-center space-y-2 p-2 border border-gray-500 hover:bg-gray-50 bg-gray-200'>
            <PlusIcon className='text-blue-600 h-8 w-8' />
            <h4 className='font-semibold'>ANTIBIOTIC</h4>
            <p className='text-sm'>
              An antibiotic is a type of antimicrobial substance active against
              bacteria and is the most important type of antibacterial agent for
              fighting bacterial infections.
            </p>
          </div>
          <div className='flex flex-col items-center text-center space-y-2 p-2 border border-gray-500 hover:bg-gray-50 bg-gray-200'>
            <PlusIcon className='text-blue-600 h-8 w-8' />
            <h4 className='font-semibold'>PAIN MANAGEMENT</h4>
            <p className='text-sm'>
              Pain management is a branch of medicine employing an
              interdisciplinary approach for easing the suffering and improving
              the quality of life of those living with chronic pain.
            </p>
          </div>
          <div className='flex flex-col items-center text-center space-y-2 p-2 border border-gray-500 hover:bg-gray-50 bg-gray-200'>
            <PlusIcon className='text-blue-600 h-8 w-8' />
            <h4 className='font-semibold'>VITAMIN D SUPPLEMENT</h4>
            <p className='text-sm'>
              Vitamin D is a group of fat-soluble secosteroids responsible for
              increasing intestinal absorption of calcium, magnesium, and
              phosphate, and many other biological effects.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
}
