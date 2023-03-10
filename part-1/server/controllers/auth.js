const users = [];
const bcrypt = require('bcryptjs')

module.exports = {
    login: (req, res) => {
      let login = false;
      const { username, password } = req.body
      for (let i = 0; i < users.length; i++) {
        if (users[i].username === username) {
          if (bcrypt.compareSync(password, users[i].passwordHash)) {
            login = true;
            console.log(req.body)
            return res.status(200).send(users[i])
          } else {
            res.status(400).send('incorrect password');
          }
        }
      }

      if (!login) {
        return res.status(400).send('user not found :(');
      }
    },
    register: (req, res) => {
        console.log('Registering User')
        const { password } = req.body;

        const salt = bcrypt.genSaltSync(5);
        const passwordHash = bcrypt.hashSync(password, salt)

        let newBody =  {
          username: req.body.username,
          email: req.body.email,
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          passwordHash: passwordHash
        }

        console.log(newBody)
        
        users.push(newBody)
        res.status(200).send(req.body)
    }
}