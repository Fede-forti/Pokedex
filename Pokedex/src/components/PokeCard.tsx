import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export interface ICardProps {
  name: string;
  url: string;
  number: number;
  mostraModal: (e: React.MouseEvent<HTMLDivElement>) => void;
}



const PokeCard = (props:ICardProps) => {

    

  return (
    <Card style={{ width: '15rem', margin: "20px"}}>
      <Card.Img variant="top" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.number}.png` }/>
      <Card.Body>
        <Card.Title style={{textTransform : "capitalize"}}>{props.name}</Card.Title>
        <Button variant="primary" id={props.name} onClick={() => props.mostraModal}>Vedi dettagli</Button>
      </Card.Body>
    </Card>
  );
}



export default PokeCard