import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    q: 'Isso é manipulação?',
    a: 'Não. O sistema ensina apresentação visual e percepção digital — da mesma forma que maquiagem, fotografia profissional e edição são ferramentas de apresentação. Você está melhorando como você é percebido, não fabricando uma identidade inexistente.',
  },
  {
    q: 'As fotos parecem artificiais?',
    a: 'O foco central do sistema é naturalidade e plausibilidade social. Os prompts e técnicas foram desenvolvidos para criar imagens que pareçam autenticamente suas — não imagens com aparência de IA.',
  },
  {
    q: 'Isso funciona sem eu ser bonito?',
    a: 'Sim. Homens medianos com percepção visual forte frequentemente performam melhor do que homens atraentes com presença digital fraca. Percepção é construída — não apenas herdada.',
  },
  {
    q: 'Mulheres percebem que é IA?',
    a: 'Quando o sistema é aplicado corretamente, as fotos são naturalistas, editoriais e socialmente plausíveis. O objetivo é criar fotos que pareçam simplesmente versões mais bem fotografadas de você.',
  },
  {
    q: 'Isso funciona para homens comuns?',
    a: 'O sistema foi criado especificamente para homens que não têm fotógrafo profissional, lifestyle de luxo real ou habilidades avançadas de edição — e querem construir uma presença visual competitiva mesmo assim.',
  },
  {
    q: 'Preciso parecer rico?',
    a: 'Não. O sistema não é sobre demonstrar riqueza artificial. Foca em sofisticação, intencionalidade visual e plausibilidade social — não em ostentação.',
  },
  {
    q: 'Isso é só filtro avançado?',
    a: 'Não. É um sistema completo de engenharia perceptiva — desde composição e iluminação até identidade visual, posicionamento de perfil e direção estética masculina moderna.',
  },
  {
    q: 'Preciso saber usar IA?',
    a: 'Não. O sistema inclui workflows estruturados, prompt libraries prontas e guias passo a passo. Você não precisa de experiência prévia com IA.',
  },
  {
    q: 'Quanto tempo leva?',
    a: 'O workflow foi desenhado para ser rápido. É possível produzir um conjunto de fotos de alta qualidade perceptiva em poucas horas seguindo o sistema.',
  },
  {
    q: 'Funciona para Tinder e Instagram?',
    a: 'Sim. O sistema inclui um módulo específico de otimização de perfil para cada plataforma, considerando os diferentes contextos de percepção visual em cada uma.',
  },
  {
    q: 'Posso usar minhas próprias fotos?',
    a: 'Sim. O sistema inclui técnicas tanto para geração completa com IA quanto para otimização e aprimoramento de fotos reais suas.',
  },
  {
    q: 'Isso substitui melhorar minha vida real?',
    a: 'Não — e o sistema é explícito sobre isso. O objetivo é reduzir a diferença entre como você é percebido digitalmente e seu potencial real. Melhorar sua vida real continua sendo o fundamento.',
  },
  {
    q: 'As fotos parecem naturais?',
    a: 'Esse é o principal critério de qualidade do sistema. Fotos que não passam por naturais são consideradas falhas — não resultados aceitáveis.',
  },
  {
    q: 'Preciso de ferramentas pagas?',
    a: 'O sistema mostra como obter resultados com ferramentas gratuitas e pagas, com diferentes níveis de qualidade. Você escolhe o que se adapta ao seu orçamento.',
  },
  {
    q: 'Isso cria uma imagem falsa?',
    a: 'O objetivo é criar a melhor versão visualmente plausível de você — não uma persona inventada. Naturalidade e consistência são requisitos do sistema, não sugestões.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="section-shell">
      <div className="absolute inset-0 bg-brand-bgSecondary/20" />

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 md:px-10">
        <div className="text-center mb-12 sm:mb-16">
          <p className="section-label text-[9px] sm:text-[10px] mb-3 sm:mb-4">Perguntas frequentes</p>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light leading-[1.15] tracking-tight text-brand-text">Respostas diretas.</h2>
        </div>

        <div className="space-y-1">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="border border-brand-border/60 rounded-sm overflow-hidden transition-colors hover:border-brand-border"
            >
              <button
                className="w-full flex items-center justify-between gap-3 sm:gap-4 p-3 sm:p-5 text-left"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span className="font-sans text-xs sm:text-sm font-light text-brand-text leading-relaxed pr-3 sm:pr-4">
                  {faq.q}
                </span>
                <span className="flex-shrink-0 w-5 h-5 flex items-center justify-center text-brand-gold">
                  {openIndex === i ? <Minus size={14} /> : <Plus size={14} />}
                </span>
              </button>

              {openIndex === i && (
                <div className="px-3 sm:px-5 pb-3 sm:pb-5 border-t border-brand-border/40">
                  <p className="font-sans text-xs sm:text-sm font-light text-brand-textMuted leading-relaxed pt-3 sm:pt-4">
                    {faq.a}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
