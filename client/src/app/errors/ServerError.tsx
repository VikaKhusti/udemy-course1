import { Button, Divider, Paper, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { useHistory, useLocation } from "react-router-dom";

export default function ServerError(){
    const history = useHistory();
    const {state} = useLocation<any>();

    return(
        <Container component={Paper}>
            {state?.error ? (
                <>
                <Typography variant="h3" gutterBottom color='error'>
                    {state?.error?.title || 'Server Error'}
                </Typography>
                <Divider/>
                <Typography>{state?.error?.detail || 'Internal Server Error'}</Typography>
            </>
            ) : (
                <Typography variant="h5" gutterBottom>
                    Server Error
                </Typography>
            )}
            <Button onClick={() => history.push('/catalog')}>Back to Catalog</Button>
            
        </Container>
    )
}