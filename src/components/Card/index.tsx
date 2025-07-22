import { getFormattedDate } from "../../utils/helper";
import { CardContent, CardDate, CardDescription, CardImage, CardTitle, StyledCard } from "./styles";

interface CardProps {
  title: string;
  description: string;
  date: string;
  image: string;
}

const Card = ({ title, description, date, image }: CardProps) => {
  
  return (
    <StyledCard>
        <CardImage>
            <img src={image} alt="card" />
        </CardImage>
        <CardContent>
            <CardTitle>{title}</CardTitle>
            <CardDescription>{description}</CardDescription>
            <CardDate>{getFormattedDate(date)}</CardDate>
        </CardContent>
    </StyledCard>
  )
}

export default Card