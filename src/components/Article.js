import './Article.css';
import Card from './Card.js';
function Article(params)
{
    return(
        <div className="article">
            {
                Object.params(db).map
                (
                    elem =>
                    {
                        <Card human={params.db[elem]} />
                    }
                )
            }

        </div>

         
    );
}
export default Article;