import { useLanguage } from '~/contexts/LanguageContext';
import { footerData } from '~/data/footerData';

export default function Footer() {
  const { language } = useLanguage();
  const t = footerData[language];

  const LinkComponent = ({ href, text }: { href: string; text: string }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-slate-300 transition-colors">
      {text}
    </a>
  );

  return (
    <footer id="main-footer" className="mt-24 text-xs text-slate-400">
      <p id="tech-stack" className="leading-relaxed flex flex-wrap">
        <span className="after:content-['.'] after:mr-1">
          <LinkComponent href="https://code.visualstudio.com/" text="Visual Studio Code" />'da {t.designedAndCoded}
        </span>
        <span>
          <LinkComponent href="https://remix.run/" text=" Remix" />, {' '}
          <LinkComponent href="https://reactjs.org/" text="React" />, {' '}
          <LinkComponent href="https://www.typescriptlang.org/" text="TypeScript" /> 
          <br></br>{t.and}{' '}
          <LinkComponent href="https://tailwindcss.com/" text="Tailwind CSS" /> {t.withCreated}
        </span>
        <span className="w-full mt-1">
          {t.allTextSet} <LinkComponent href="https://rsms.me/inter/" text="Inter" /> {t.typeface}
        </span>
      </p>
    </footer>
  );
}
