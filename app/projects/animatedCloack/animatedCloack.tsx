import { useLanguage } from '~/contexts/LanguageContext';

export default function AnimatedCloackProject() {
  const { language } = useLanguage();
  
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl text-lightest-slate mb-4">
        {language === 'tr' ? 'Proje Detayı' : 'Project Detail'}
      </h1>
      {/* İleride içerik buraya eklenecek */}
    </div>
  );
}
