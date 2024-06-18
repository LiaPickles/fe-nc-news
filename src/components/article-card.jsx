import '../App.css'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup'


function ArticleCard({ article }) {
    return (
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={article.article_img_url} />
        <Card.Body>
          <Card.Title>{article.title}</Card.Title>
          <Card.Text>
            Topic: {article.title}
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>Author: {article.author}</ListGroup.Item>
          <ListGroup.Item>Created at: {article.created_at}</ListGroup.Item>
          <ListGroup.Item>Votes: {article.votes}</ListGroup.Item>
        </ListGroup>
      </Card>
    );
  }


export default ArticleCard

