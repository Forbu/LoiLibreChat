import { useNavigate } from 'react-router-dom';
import { 
    Container,
    Typography,
    Button,
    Card,
    CardContent,
    Grid,
    Box,
    Alert,
    Paper
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import GavelIcon from '@mui/icons-material/Gavel';
import LockIcon from '@mui/icons-material/Lock';

function Intro() {
    const navigate = useNavigate();
    
    return (

            <Container 
                maxWidth="md"
                sx={{
                    backgroundColor: 'transparent',
                }}
            >
                <Paper 
                    elevation={3} 
                    sx={{ 
                        p: 4, 
                        borderRadius: 2,
                        backgroundColor: 'transparent',
                        boxShadow: 'none',
                    }}
                >
                    <Typography variant="h3" component="h1" gutterBottom align="center">
                        Bienvenue sur LoiLibre
                    </Typography>
                    <Typography variant="h5" component="h2" gutterBottom align="center" color="text.secondary">
                        Votre assistant juridique gratuit et open source
                    </Typography>

                    <Grid container spacing={3} sx={{ my: 4 }}>
                        <Grid item xs={12} sm={4}>
                            <Card 
                                sx={{ 
                                    height: '100%',
                                    transition: 'transform 0.2s',
                                    '&:hover': {
                                        transform: 'translateY(-5px)'
                                    }
                                }}
                            >
                                <CardContent>
                                    <SearchIcon sx={{ fontSize: 40, color: 'primary.main', mb: 2 }} />
                                    <Typography variant="h6" gutterBottom>
                                        Simple et Accessible
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Posez vos questions juridiques en langage naturel
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Card 
                                sx={{ 
                                    height: '100%',
                                    transition: 'transform 0.2s',
                                    '&:hover': {
                                        transform: 'translateY(-5px)'
                                    }
                                }}
                            >
                                <CardContent>
                                    <GavelIcon sx={{ fontSize: 40, color: 'primary.main', mb: 2 }} />
                                    <Typography variant="h6" gutterBottom>
                                        Fiable
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Réponses basées sur le droit français en vigueur
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Card 
                                sx={{ 
                                    height: '100%',
                                    transition: 'transform 0.2s',
                                    '&:hover': {
                                        transform: 'translateY(-5px)'
                                    }
                                }}
                            >
                                <CardContent>
                                    <LockIcon sx={{ fontSize: 40, color: 'primary.main', mb: 2 }} />
                                    <Typography variant="h6" gutterBottom>
                                        Confidentiel
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Vos données sont protégées et restent privées
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>

                    <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', my: 4 }}>
                        <Button 
                            variant="contained" 
                            size="large"
                            onClick={() => navigate('/login')}
                        >
                            Se connecter
                        </Button>
                        <Button 
                            variant="outlined"
                            size="large"
                            onClick={() => navigate('/register')}
                        >
                            Créer un compte
                        </Button>
                    </Box>

                    <Alert severity="warning" sx={{ mt: 4 }}>
                        LoiLibre fournit des informations juridiques générales à titre indicatif. 
                        Pour des conseils juridiques personnalisés, veuillez consulter un professionnel du droit.
                    </Alert>
                </Paper>
            </Container>

    );
}

export default Intro;