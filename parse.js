import * as cheerio from 'cheerio'

function parseHTML(html, selector) {
  const $ = cheerio.load(html);
  const content = $(selector).text()
  console.log(content)
}

export default parseHTML
