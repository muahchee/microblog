import Showdown from "showdown";

const converter = new Showdown.Converter()

//converter.makeMarkdown(text)

export function toMarkdown(text) {
  return converter.makeMarkdown(text)
}

export function toHtml(text) {
  return converter.makeHtml(text)
}

//converter.makeHtml(text)