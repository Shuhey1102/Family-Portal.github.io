import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';

export default function CardHeader(
    props: { icon : string,
             title: string,
             path: string,             
             messageAll: string,             
           }
) {
    return(
        <>
            <div className="card-item">
                <input className="menu-icon" type="image" src={props.icon} alt={props.title} />
                <section>{props.title}</section>
                <a href={props.path}>
                    <CardActions>
                        <Button size="small">{props.messageAll}</Button>
                    </CardActions>
                </a>
            </div>             
        </>
    )
}