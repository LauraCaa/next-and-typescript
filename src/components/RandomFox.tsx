
import Image from 'next/image';

const RandomFox = ({ image }: { image: string }) => {
  return (
    <Image
      src={image}
      alt="Random Fox"
      width={300}
      height={300}
      className="rounded"
    />
  );
};

export default RandomFox;;
