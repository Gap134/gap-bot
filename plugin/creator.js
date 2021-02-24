let handler = function (m) {
  // this.sendContact(m.chat, '6285890378330', ' Owner GAP GAMING', m)
  this.sendContact(m.chat, '62895328229595', 'Admin', m)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
