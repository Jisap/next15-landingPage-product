interface ReviewCardProps {
  image: string;
  name: string;
  role: string;
}

const ReviewCard = ({ image, name, role }: ReviewCardProps) => {
  return (
    <div>{name}</div>
  )
}

export default ReviewCard