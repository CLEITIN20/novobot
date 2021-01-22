exports.wait = () => {
	return`*「 ESPERE 」 EM PROCESSO*`
}

exports.succes = () => {
	return`*「 SUCESSO 」*`
}

exports.lvlon = () => {
	return`*「 HABILITAR 」 LEVELING*`
}

exports.lvloff = () => {
	return`*「 DESATIVAR 」 LEVELING*`
}

exports.lvlnul = () => {
	return`*SEU NÍVEL AINDA ESTÁ VAZIO*`
}

exports.lvlnoon = () => {
	return`*O NÍVEL DO GRUPO NÃO FOI ATIVADO*`
}

exports.noregis = () => {
	return`*「 NÃO REGISTRADO 」*\n\n*como listar ${prefix}daftar nama|umur* \n*contoh ${prefix}daftar affis|17*`
}

exports.rediregis = () => {
	return`*「 JÁ REGISTRADO 」*\n\n* Você está registrado no banco de dados do bot*`
}

exports.stikga = () => {
	return`*sim falhou tente repetir mais alguns momentos*`
}

exports.linkga = () => {
	return`*desculpe o link é inválido*`
}

exports.groupo = () => {
	return`*「SÓ NO GRUPO」*`
}

exports.ownerb = () => {
	return`*「OWNER BOT APENAS」*`
}

exports.ownerg = () => {
	return`*「SOMENTE GRUPO DE PROPRIETÁRIOS」*`
}

exports.admin = () => {
	return`*「SOMENTE ADMINISTRAÇÃO DO GRUPO」*`
}

exports.badmin = () => {
	return`*「O BOT DEVE SER ADMINISTRADOR」*`
}

exports.nsfwoff = () => {
	return`*NSFW EM ATIVO*`
}

exports.bug = () => {
	return`*Problemas foram relatados ao proprietário do BOT, relatórios falsos não serão respondidos*`
}

exports.wrongf = () => {
	return`*Formato incorreto / texto em branco*`
}

exports.clears = () => {
	return`*limpar todo o sucesso*`
}

exports.pc = () => {
	return`*「 CADASTRO 」*\n\nuntuk mengetahui apa kamu sudah terdaftar silahkah check message yang saya kirim \n\nNOTE:\n*jika kamu belum mendapatkan pesan. berarti kamu belum menyimpan nomer bot*`
}

exports.registered = (namaUser, umurUser, serialUser, time, sender) => {
	return`*「 DADOS 」*\n\nvocê se registrou com os dados \n\n┏━⊱nome\n┗⊱${namaUser}\n┏━⊱numero\n┗⊱wa.me/${sender.split("@")[0]}\n┏━⊱idade\n┗⊱${umurUser}\n┏━⊱hora de registro\n┗⊱${time}\n\n┏━❉ *NS* ❉━\n┣⊱${serialUser}\n┗⊱NOTA: não se esqueça deste número porque é importante: v`
}

exports.cmdnf = (prefix, command) => {
	return`comando *${prefix}${command}* não encontrado \ tente escrever *${prefix}menu*`
}

exports.owneresce = (pushname) => {
	return`*Desculpe, mas ${pushname} não o script do dono*`
}

exports.reglevelaha = (command, pushname, getLevelingLevel, sender, aha) => {
	return`*Desculpa ${pushname} seu nível não é suficiente*\n\n*┏⊱level seu : ${getLevelingLevel(sender)}*\n*┣⊱tipo de comando : ${command}*\n*┗⊱requisitos de nível : ${aha}*\n\n_NOTA: CHAT / SEMPRE PARA OBTER XP_`
}

exports.reglevelahb = (command, pushname, getLevelingLevel, sender, ahb) => {
	return`*desculpa ${pushname} seu nível não é suficiente*\n\n*┏⊱level seu: ${getLevelingLevel(sender)}*\n*┣⊱tipo de comando : ${command}*\n*┗⊱requisitos de nível : ${ahb}*\n\n_CHAT / SEMPRE PARA OBTER XP_`
}

exports.reglevelahc = (command, pushname, getLevelingLevel, sender, ahc) => {
	return`*desculpa ${pushname} seu nível não é suficiente*\n\n*┏⊱level seu : ${getLevelingLevel(sender)}*\n*┣⊱tipo de comando : ${command}*\n*┗⊱requisitos de nível : ${ahc}*\n\n_CHAT / SEMPRE PARA OBTER XP_`
}

exports.reglevelahd = (command, pushname, getLevelingLevel, sender, ahd) => {
	return`*desculpa ${pushname} seu nível não é suficiente*\n\n*┏⊱level seu : ${getLevelingLevel(sender)}*\n*┣tipo de comando : ${command}*\n*┗⊱requisitos de nível : ${ahd}*\n\n_CHAT / SEMPRE PARA OBTER XP_`
}

exports.reglevelahe = (command, pushname, getLevelingLevel, sender, ahe) => {
	return`*desculpa ${pushname} seu nível não é suficiente*\n\n*┏⊱level seu : ${getLevelingLevel(sender)}*\n*┣⊱tipo de comando : ${command}*\n*┗⊱requisitos de nível : ${ahe}*\n\n_CHAT / SEMPRE PARA OBTER XP_`
}

exports.reglevelahf = (command, pushname, getLevelingLevel, sender, ahf) => {
	return`*desculpa ${pushname} seu nível não é suficiente*\n\n*┏⊱level seu : ${getLevelingLevel(sender)}*\n*┣⊱tipo de comando : ${command}*\n*┗⊱requisitos de nível : ${ahf}*\n\n_CHAT / SEMPRE PARA OBTER XP_`
}

exports.menu = (pushname, prefix, getLevelingLevel, getLevelingXp, sender, reqXp, _registered, uangku) => { 
	return `
╭══─⊱ ❰ *HENRIQUE BOTS* ❱ ⊰─══
╠☞ *nome* : ${pushname}
╠☞ *numero* : wa.me/${sender.split("@")[0]}
╠☞ *O teu dinheiro* : Rp${uangku}
╠☞ *XP* : ${getLevelingXp(sender)}/${reqXp}
╠☞ *Level* : ${getLevelingLevel(sender)}
╠☞ *Registro do usuário* : ${_registered.length}
╰════─⊱  ⸨ *HENRIQUE BOTS* ⸩  ⊰─════╯

          regras simples
▬▭▬▭▬▭▬▭▬▭▬▭▬
●⧐ *Spam: bloqueio automático!*
●⧐ *Dê uma pausa de 5 segundos quando Use-o!!*
●⧐ *Bug / Erro, por favor, Cht Proprietário!*
●⧐ *Para ter certeza de que o bot está desligado ou ligado*
●⧐ *Tipo ${prefix}bot*
●⧐ *Por favor, seja paciente com os bugs!*
●⧐ *Use o bot o melhor!*
▬▭▬▭▬▭▬▭▬▭▬▭▬

╭══─⊱ ❰ *MAKER MENU* ❱ ⊰─══➤
╠☞ *${prefix}sticker*
╠☞ *${prefix}vinta*
╠☞ *${prefix}avengers*
╠☞ *${prefix}summer*
╠☞ *${prefix}sandwrite*
╠☞ *${prefix}metaldark*
╠☞ *${prefix}dropwater*
╠☞ *${prefix}greenneon*
╠☞ *${prefix}neontext*
╠☞ *${prefix}sumery*
╠☞ *${prefix}blood*
╠☞ *${prefix}firework*
╠☞ *${prefix}lava*
║
╠══─⊱ ❰ *DIVERSÃO MENU* ❱ ⊰─════➤
╠☞ *${prefix}mining*
╠☞ *${prefix}bisakah*
╠☞ *${prefix}kapankah*
╠☞ *${prefix}apakah*
╠☞ *${prefix}rate*
╠☞ *${prefix}slap*
╠☞ *${prefix}tampar*
╠☞ *${prefix}speed*
║
╠══─⊱ ❰ *MEDIA MENU* ❱ ⊰─═══➤
╠☞ *${prefix}toxic*
╠☞ *${prefix}quotes*
╠☞ *${prefix}beritahoax*
╠☞ *${prefix}brainly*
╠☞ *${prefix}pinterest*
╠☞ *${prefix}resepmasakan*
╠☞ *${prefix}igstalk*
║
╠══─⊱ ❰ *LIMITE MENU* ❱ ⊰─═══➤
╠☞ *${prefix}limit*
╠☞ *${prefix}buylimit*
╠☞ *${prefix}dompet*
║
╠══─⊱ ❰ *NSFW MENU* ❱ ⊰─═══➤
╠☞ *${prefix}pokemon*
╠☞ *${prefix}anjing*
╠☞ *${prefix}1cak*
║
╠══─⊱ ❰ *GRUPO MENU* ❱ ⊰─══➤
╠☞ *${prefix}hidetag*
╠☞ *${prefix}grouplist*
╠☞ *${prefix}limit*
╠☞ *${prefix}level*
╠☞ *${prefix}linkgc*
╠☞ *${prefix}tagall*
╠☞ *${prefix}setpp*
╠☞ *${prefix}add*
╠☞ *${prefix}kick*
╠☞ *${prefix}name*
╠☞ *${prefix}desc*
╠☞ *${prefix}demitir*
╠☞ *${prefix}promover*
╠☞ *${prefix}listadmin*
╠☞ *${prefix}group* [buka/tutup]
╠☞ *${prefix}leveling* [enable/disable]
╠☞ *${prefix}nsfw* [1/0]
╠☞ *${prefix}simih* [1/0]
╠☞ *${prefix}welcome* [1/0]
║
╠══─⊱ ❰ *PROPRIETÁRIO MENU* ❱ ⊰─══➤
╠☞ *${prefix}bc*
╠☞ *${prefix}bcgc*
╠☞ *${prefix}kickall*
╠☞ *${prefix}setreply*
╠☞ *${prefix}setprefix*
╠☞ *${prefix}clearall*
╠☞ *${prefix}block*
╠☞ *${prefix}unblock*
╠☞ *${prefix}leave*
╠☞ *${prefix}event* [1/0]
╠☞ *${prefix}clone*
╠☞ *${prefix}setppbot*
║
╠══─⊱ ❰ *AGRADECIMENTOS* ❱ ⊰─══➤
║
╠☞ DONO DO BOT
╠☞ 𝐇𝐄𝐍𝐑𝐈𝐐𝐔𝐄 𝐁𝐎𝐓𝐒
╠☞ CONTATO DO DONO
╠☞ https://wa.me/+5527998401752
╠☞ GRUPO DO DONO DO BOT
╠☞ https://chat.whatsapp.com/D6pzWbHSxnPFImv410f2p3
╰════─⊱  ⸨ *HENRIQUE BOTS* ⸩  ⊰─════╯
`
}

exports.levelup = (pushname, sender, getLevelingXp,  getLevel, getLevelingLevel) => {
	return`
*「 FELIZ 」*
┏⊱ *Nome* : ${pushname}
┣⊱ *Numero* : wa.me/${sender.split("@")[0]}
┣⊱ *Xp* : ${getLevelingXp(sender)}
┗⊱ *Level* : ${getLevel} ⊱ ${getLevelingLevel(sender)}
`}
 
exports.limitend = (pushname) => {
	return`*Desculpa ${pushname} O limite de hoje aumentou*\n*O limite é zerado a cada hora 24:00*`
}

exports.limitcount = (limitCounts) => {
	return`
*「 CONTAGEM DE LIMEITE 」*
sisa limit anda : ${limitCounts}

NOTA: para obter o limite. pode passar de nível ou limite de capacidade`
}

exports.satukos = () => {
	return`*Adicionar parâmetro 1 / ativar ou 0 / desativar`
}

exports.uangkau = (pushname, sender, uangkau) => {
	return`*┏⊱ *「 ATM 」* ━┓\n┣⊱ *Nome* : ${pushname}\n┣⊱ *Nomer* : ${sender.split("@")[0]}\n┣⊱ *Dinheiro* : ${uangkau}\n┗━━━━━━━━━━`
}
