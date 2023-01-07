const texto = `
https://www.instagram.com/p/BXB4zsUlW5Z/?taken-by=beco.mx
url: http://instagram.com/p/blablablah
url: http://itam.mx/test
http://instagram.com/p/blablablah
https://www.vanguarsoft.com.ve
http://platzi.com
https://traetelo.net
https://traetelo.net/images archivo.jsp
url: https://subdominio.traetelo.net
url: https://www.instagram.com/p/BXB4zsUlW5Z/?taken-by=beco.mx
url: http://instagram.com/p/blablablah
url: http://itam.mx/test
http://instagram.com/p/blablablah
https://www.google.com.co/
https://sub.dominio.de.alguien.com/archivo.html
https://en.wikipedia.org/wiki/.org
https://cdn-microsoft.org/image/seixo2t9sjl_22.jpg
https://hola.pizza
https://platzi.com/clases/1301-expresiones-regulares/11860-urls9102/ clase
https://api.giphy.com/v1/gifs/search?q=Rick and Morty&limit=10&api_key=DG3hItPp5HIRNC0nit3AOR7eQZAe
http://localhost:3000/something?color1=red&color2=blue
http://localhost:3000/display/post?size=small
http://localhost:3000/?name=satyam
http://localhost:3000/scanned?orderid=234
http://localhost:3000/getUsers?userId=12354411&name=Billy
http://localhost:3000/getUsers?userId=12354411
http://localhost:3000/search?city=Barcelona
https://www.myfiles.net/documents/school/homework.pdf
https://imagehost.io/photos/family/christmas.jpg
http://www.videostream.com/movies/comedy/dumb-and-dumber.mp4
https://musicdownloads.co/jazz/miles-davis/kind-of-blue.mp3
http://presentationpro.io/work/projects/project2/presentation.ppt
http://ebooklibrary.net/books/mystery/agatha-christie-collection.epub
https://legalforms.net/contracts/rental-agreement.docx
https://appstore.net/software/utilities/winzip.exe
http://historychannel.net/world-war-ii/battle-of-normandy.txt
https://funstuff.net/jokes/yo-mama.txt
https://www.docs.com/documents/business/marketing-plan.pdf
https://www.photos.net/landscapes/desert.jpg
https://www.movies.co/drama/forrest-gump.mp4
https://www.music.net/pop/taylor-swift/shake-it-off.mp3
https://www.presentations.net/education/math-lesson.ppt
https://www.ebooks.co/romance/pride-and-prejudice.epub
https://www.legal.net/contracts/employment-agreement.docx
https://www.software.net/graphic-design/adobe-illustrator.exe
https://www.history.net/ancient-greece/parthenon.txt
https://www.fun.net/quizzes/personality/which-disney-princess-are-you.html
`;

console.log(texto.match(/https?:\/\/([\w-]+[\.:])+(\w+\/?.*)/g));