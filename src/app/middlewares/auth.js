module.exports = (req, res, next) => {
  // verificar se existe uma sessão e se o usuario esta logado
  if (req.session && req.session.user) {
    // objeto de informação q fica  disponivel pra todas as views res.locals.user
    res.locals.user = req.session.user
    return next()
  }
  return res.redirect('/')
}
