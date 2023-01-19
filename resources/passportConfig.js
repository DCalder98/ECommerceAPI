//const passport = require('passport');
const LocalStrategy = require('passport-local');
const auth = require('./auth');

module.exports = (passport) =>{
    passport.use(
        'local-signup',
        new LocalStrategy(
            {
                usernameField: 'email',
                passwordField: 'password',
            },
            async (email, password, done) => {
                try{
                    const userExists = await auth.emailExists(email);

                    if (userExists){
                        return done(null, false)
                    }
                    const user = await auth.createUser(email, password);
                    return done(null, user);
                } catch (error){
                    done(error);
                }
            }
        )
    );
    passport.use(
        'local-login',
        new LocalStrategy(
            {
                usernameField: 'email',
                passwordField: 'password',
            },
            async (email, password, done) =>{
                try{
                    const user = await auth.emailExists(email);
                    if(!user) 
                    {
                        console.log('User Exists')
                        return done(null, false);
                        
                    }
                    const isMatch = await auth.matchPassword(password, user.password);
                    if(!isMatch) return done(null, false);
                    return done(null, {id: user.id, email: user.email});
                }catch(error){
                    return done(error, false);
                }
            }
        )
    )
}