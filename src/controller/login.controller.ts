    import AuthService from '../services/login.services';

    //objeto de la clase  Login.service
    const service = new AuthService();

    const login = (req, res, next) => {
        try{
            const user = req.user;
            res.json(service.signToken(user))
        }catch(error){
            next(error);
        }
    };

    const recovery = async (req, res, next) => {

    }

    export { login,recovery }