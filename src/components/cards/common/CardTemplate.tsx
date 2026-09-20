import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from './CardHeader';

export default function FinanceCard(
    props: {
        icon: string,
        title: string,
        path: string,
        messageAll: string,
        CardContent: React.ReactNode
        maxWidth?: number
    }
){
  return (
    <>
        <Card sx={{ maxWidth: props.maxWidth || 345 }}>
            <CardHeader
                icon={props.icon}
                title={props.title}
                path={props.path}
                messageAll={props.messageAll}
            />
            <CardContent>
                {props.CardContent}
            </CardContent>
        </Card>
    </>
  );
}