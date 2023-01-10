const urls = `https://b3co.com/?s=fotografia&mode=search&module=blog
https://www.google.com/search?q=regex+platzi&oq=regex+platzi&aqs=chrome..69i57j69i60.6885j0j9&sourceid=chrome&ie=UTF-8
https://co.search.yahoo.com/search?p=flickr&fr=yfp-t&fp=1&toggle=1&cop=mss&ie=UTF-8`;

const querys = urls.match(/[&\?](\w+)=([^&\n]+)/gm).join('\n');

console.log(querys.replace(/[&\?](\w+)=([^&\n]+)/gm, '{$1 : $2}'));
