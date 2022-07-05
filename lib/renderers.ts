import hljs, { LanguageFn } from 'highlight.js';

// Languages
import css from 'highlight.js/lib/languages/css';
import javascript from 'highlight.js/lib/languages/javascript';
import typescript from 'highlight.js/lib/languages/typescript';

const languages = new Map<string, LanguageFn>([
  ['css', css],
  ['javascript', javascript],
  ['typescript', typescript],
]);

languages.forEach((langFile, langName) => hljs.registerLanguage(langName, langFile));

const escapeMap = new Map([
  ['&', '&amp;'],
  ['<', '&lt;'],
  ['>', '&gt;'],
  ['"', '&quot;'],
  ["'", '&#39;'],
]);

const escapeHtml = (input: string) => input.replace(/([&<>'"])/g, (char) => escapeMap.get(char)!);

const renderer = {
  paragraph(text: string) {
    const escapedText = text.toLowerCase().replace(/\[^\w]+g/, '-');
    if (escapedText.includes('<img')) {
      return escapedText;
    }

    return `
      <p>${text}</p>
    `;
  },

  code(code: string, language: string) {
    // const escapedText = code.toLowerCase().replace(/\[^\w]+g/, '-');
    const validLang = !!(language && hljs.getLanguage(language));

    const highlighted = validLang
      ? hljs.highlight(language, code).value
      : escapeHtml(code);

    return `<pre><code class="hljs ${language}">${highlighted}</code></pre>`;
  },
};

export default renderer;
