const texto = `
esto.es_un.mail@mail.com
esto.es_un.mail+complejo@mail.com
@dominio.com
rodrigo.jimenez@yahoo.com.mx
ruben@starbucks.com
esto_no$es_email@dominio.com
no_se_de_internet3@hotmail.com
`;

mails: /[\w\._]{5,30}\+?\w{0,10}@[\w\.\-]{3,}\.\w{2,5}/;
mails2: /^([\w\._]{5,30}\+?\w{0,10})@[\w\.\-]{3,}\.\w{2,5}/;

console.log(texto.match(/^([\w\._]{5,30}\+?\w{0,10})@[\w\.\-]{3,}\.\w{2,5}/gm));