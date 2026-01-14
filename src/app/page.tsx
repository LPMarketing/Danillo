import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Briefcase, CheckCircle2, Clock, UserX, XCircle } from 'lucide-react';
import { Icons } from '@/components/icons';

export default function Home() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero-background');
  const specialistImage = PlaceHolderImages.find(p => p.id === 'specialist-photo');
  const whatsappLink = "https://wa.me/5511999999999?text=Ol%C3%A1%2C%20tive%20um%20problema%20com%20meu%20voo%20e%20gostaria%20de%20analisar%20meu%20caso.";

  const problemCards = [
    {
      icon: <XCircle className="w-10 h-10 text-accent" />,
      title: 'Voo Cancelado',
      description: 'Cancelamento sem aviso prévio ou reacomodação inadequada? Você tem direitos.',
    },
    {
      icon: <Clock className="w-10 h-10 text-accent" />,
      title: 'Atraso de Voo',
      description: 'Chegou ao destino com mais de 4 horas de atraso? O tempo perdido gera indenização.',
    },
    {
      icon: <Briefcase className="w-10 h-10 text-accent" />,
      title: 'Extravio de Bagagem',
      description: 'Sua mala sumiu ou chegou danificada? Não fique no prejuízo material e moral.',
    },
    {
      icon: <UserX className="w-10 h-10 text-accent" />,
      title: 'Overbooking',
      description: 'Foi impedido de embarcar por falta de lugar? A falha da companhia aérea é grave.',
    },
  ];

  const differentiators = [
    {
      title: 'Atendimento Individualizado',
      description: 'Não somos robôs. Aqui seu caso é tratado com atenção exclusiva pelo Dr. Danillo Campos.',
    },
    {
      title: 'Retorno Rápido',
      description: 'Sabemos que seu problema precisa de solução ágil.',
    },
    {
      title: 'Transparência e Honestidade',
      description: 'Avaliamos a viabilidade do seu processo com total ética.',
    },
  ];

  return (
    <div className="min-h-screen">
      <Header whatsappLink={whatsappLink} />
      <main>
        <HeroSection heroImage={heroImage} whatsappLink={whatsappLink} />
        <ProblemsSection problemCards={problemCards} whatsappLink={whatsappLink} />
        <WhyUsSection differentiators={differentiators} />
        <SpecialistSection specialistImage={specialistImage} whatsappLink={whatsappLink} />
      </main>
      <Footer />
      <FloatingWhatsAppButton whatsappLink={whatsappLink} />
    </div>
  );
}

const Header = ({ whatsappLink }: { whatsappLink: string }) => (
  <header className="sticky top-0 z-40 w-full bg-background/80 backdrop-blur-sm border-b">
    <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
      <Link href="/" className="flex items-center">
        <Image src="https://raw.githubusercontent.com/LPMarketing/Danillo/c9325a628dec86fd7ad70b69133a874d1a9b0fae/%40gdanillocrpeixoto.adv.png" alt="Peixoto & Rocha Advocacia" width={200} height={40} className="object-contain" />
      </Link>
      <Button asChild>
        <Link href={whatsappLink} target="_blank" rel="noopener noreferrer">Falar com Especialista</Link>
      </Button>
    </div>
  </header>
);

const HeroSection = ({ heroImage, whatsappLink }: { heroImage: any; whatsappLink: string }) => (
  <section className="relative h-[calc(100vh-4rem)] min-h-[500px] w-full flex items-center justify-center text-center text-white">
    {heroImage && (
      <Image
        src={heroImage.imageUrl}
        alt={heroImage.description}
        fill
        className="object-cover"
        priority
        data-ai-hint={heroImage.imageHint}
      />
    )}
    <div className="absolute inset-0 bg-black/60" />
    <div className="relative z-10 container px-4 md:px-6 flex flex-col items-center">
      <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl !leading-tight">
        Teve problemas com seu voo?
      </h1>
      <p className="mt-4 max-w-[700px] text-lg md:text-xl text-neutral-200">
        Voo cancelado, atraso superior a 4h, overbooking ou bagagem extraviada? Resolvemos seu caso com agilidade, ética e sem burocracia.
      </p>
      <Button asChild size="lg" className="mt-8 bg-accent hover:bg-accent/90 text-accent-foreground text-lg font-bold px-10 py-6 animate-pulse">
        <Link href={whatsappLink} target="_blank" rel="noopener noreferrer">
          QUERO ANALISAR MEU CASO AGORA
        </Link>
      </Button>
      <p className="mt-4 text-sm text-neutral-300">Análise rápida e atendimento humanizado.</p>
    </div>
  </section>
);

const ProblemsSection = ({ problemCards, whatsappLink }: { problemCards: any[]; whatsappLink: string }) => (
  <section id="problemas" className="w-full py-12 md:py-24 lg:py-32 bg-card">
    <div className="container mx-auto px-4 md:px-6">
      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center">
        Identifique o seu problema:
      </h2>
      <div className="mx-auto grid grid-cols-1 gap-8 mt-12 sm:grid-cols-2 lg:grid-cols-4 max-w-5xl">
        {problemCards.map((card, index) => (
          <Card key={index} className="flex flex-col items-center text-center p-6 border-2 hover:border-primary transition-all duration-300 hover:shadow-xl">
            <CardHeader className="p-0">
              {card.icon}
              <CardTitle className="mt-4">{card.title}</CardTitle>
            </CardHeader>
            <CardContent className="p-0 mt-2">
              <p className="text-muted-foreground">{card.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="flex justify-center mt-12">
        <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-lg px-10 py-6">
          <Link href={whatsappLink} target="_blank" rel="noopener noreferrer">PASSEI POR ISSO E QUERO AJUDA</Link>
        </Button>
      </div>
    </div>
  </section>
);

const WhyUsSection = ({ differentiators }: { differentiators: any[] }) => (
  <section id="diferenciais" className="w-full py-12 md:py-24 lg:py-32 bg-background">
    <div className="container mx-auto px-4 md:px-6">
      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center">
        Por que escolher a Peixoto & Rocha?
      </h2>
      <div className="mx-auto grid items-start gap-12 mt-12 lg:max-w-5xl lg:grid-cols-3">
        {differentiators.map((item, index) => (
          <div key={index} className="flex flex-col items-center text-center gap-4">
            <CheckCircle2 className="h-12 w-12 text-primary" />
            <div className="grid gap-1">
              <h3 className="text-xl font-bold">{item.title}</h3>
              <p className="text-muted-foreground">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const SpecialistSection = ({ specialistImage, whatsappLink }: { specialistImage: any; whatsappLink: string }) => (
  <section id="especialista" className="w-full py-12 md:py-24 lg:py-32 bg-card">
    <div className="container grid items-center justify-center gap-10 px-4 md:px-6 lg:grid-cols-2 lg:gap-16">
      <div className="flex justify-center">
        {specialistImage && (
          <Image
            src={specialistImage.imageUrl}
            alt={specialistImage.description}
            width={400}
            height={400}
            className="rounded-full object-cover aspect-square shadow-2xl"
            data-ai-hint={specialistImage.imageHint}
          />
        )}
      </div>
      <div className="space-y-4 text-center lg:text-left">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Quem lutará pelos seus direitos
        </h2>
        <p className="max-w-[600px] text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed mx-auto lg:mx-0">
          A Peixoto & Rocha Advocacia e Assessoria Jurídica, liderada pelo Dr. Danillo Campos Rocha Peixoto, é especializada em defender passageiros aéreos. Nosso foco é garantir que o desrespeito das companhias aéreas não fique impune. Combinamos a credibilidade jurídica com um atendimento jovem, eficiente e acessível.
        </p>
        <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg px-10 py-6">
          <Link href={whatsappLink} target="_blank" rel="noopener noreferrer">FALAR COM O ADVOGADO</Link>
        </Button>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-primary text-primary-foreground py-6">
    <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between text-center md:text-left">
      <p className="text-sm">Peixoto & Rocha Advocacia - Todos os direitos reservados.</p>
      <div className="flex gap-4 mt-4 md:mt-0 text-sm">
        <Link href="#" className="hover:underline">Política de Privacidade</Link>
        <Link href="#" className="hover:underline">Termos de Uso</Link>
      </div>
    </div>
  </footer>
);

const FloatingWhatsAppButton = ({ whatsappLink }: { whatsappLink: string }) => (
  <div className="fixed bottom-6 right-6 z-50">
    <Button asChild size="icon" className="rounded-full w-16 h-16 bg-[#25D366] hover:bg-[#128C7E] shadow-lg transition-transform hover:scale-110">
      <Link href={whatsappLink} target="_blank" rel="noopener noreferrer">
        <Icons.whatsapp className="w-8 h-8 text-white" />
        <span className="sr-only">Falar pelo WhatsApp</span>
      </Link>
    </Button>
  </div>
);
