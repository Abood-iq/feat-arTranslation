import { Translations } from "types/Translations";

const ptBrTranslations: { translations: Translations } = {
  translations: {
    generics: {
      backToBeginning: 'Voltar ao início',
      back: 'Voltar',
      soon: 'Em breve...'
    },
    footer: {
      copyrightMessage: '© 2021 International Virtual Aviation Organisation - IVAO Brazil. All Rights Reserved.',
      privacyPolicyName: 'Política de Privacidade',
      termsOfUseName: 'Termos de uso',
    },
    beta: {
      title: 'Sistema em beta',
      message: 'O 𝗞𝗥𝗢𝗡𝗢𝗦 é um sistema recem implementado na divisão e em constante desenvolvimento. Contamos com a sua colaboração com eventuais bugs 🐛.'
    },
    cookies: {
      title: 'Utilizamos cookies para melhorar a sua experiência',
      subtitle: 'Precisamos da sua autorização para continuar com a nossa maravilhosa receita de biscoitos de gengibre.',
      authorizeUse: 'Autorizar o uso',
      continueWithout: 'Continuar sem cookies',
    },
    errors: {
      general: {
        title: 'Houston, temos um problema! 💥',
        subtitle: 'Nossos sistemas indicam uma falha no computador de bordo. Recarregue a página ou tente novamente mais tarde.',
      },
      notFound: {
        title: 'Seu voo para o Acre não foi encontrado...',
        subtitle: 'Acho que você chegou ao limite do universo. A página que você requisitou não foi encontrada.'
      }
    },
    splash: {
      title: 'Experimente o melhor que a simulação aérea tem a oferecer',
      subtitle: 'Gerencie sua reserva de voos de uma maneira fácil, moderna e intuitiva.',
      explore: 'Explorar Voos!'
    },
    events: {
      found: '{{ eventsCount }} eventos encontrados'
    },
    info: {
      pilotBriefing: {
        title: 'Briefing do Piloto',
        description: 'Este documento objetiva orientar os pilotos e tripulação sobre os procedimentos específicos esperados para este evento. A leitura é fundamental.',
      },
      atcBriefing: {
        title: 'Briefing do Controlador de Voo',
        description: 'Este documento objetiva orientar os controladores sobre os procedimentos específicos esperados para este evento. A leitura é fundamental.',
      },
      sceneries: {
        title: 'Cenários',
        description: 'Encontre aqui os cenários recomendados para este evento.',
        sims: {
          fs9: {
            description: 'Microsoft Flight Simulator X (abreviado como FSX) é um simulador de voo de 2006, originalmente desenvolvido pela Aces Game Studio e publicado pela Microsoft Game Studios para Microsoft Windows.'
          },
          fsx: {
            description: 'Microsoft Flight Simulator X (abreviado como FSX) é um simulador de voo de 2006, originalmente desenvolvido pela Aces Game Studio e publicado pela Microsoft Game Studios para Microsoft Windows.'
          },
          p3d: {
            description: 'Prepar3D é uma plataforma de simulação visual que permite aos usuários criar cenários de treinamento em domínios de aviação, marítimo e terrestre.'
          },
          msfs: {
            description: 'Microsoft Flight Simulator X (abreviado como FSX) é um simulador de voo de 2006, originalmente desenvolvido pela Aces Game Studio e publicado pela Microsoft Game Studios para Microsoft Windows.'
          },
          xp11: {
            description: 'X-Plane 11 é o simulador detalhado, realista e moderno. Interface de usuário intuitiva, cockpits 3D, novos efeitos, som 3D, aeroportos vivos e cenário mundial.'
          }
        },
      },
    },
    flights: {
      search: 'Buscar voo',
      arrival_one: 'Chegada',
      arrival_other: 'Chegadas',
      departure_one: 'Partida',
      departure_other: 'Partidas',
      privateSlots: 'Slots Privados',
      flightNumber: 'Número do Voo',
      eobt: 'EOBT',
      gate: 'Posição',
      bookFlight: 'Reservar voo',
      filter: {
        title: 'Filtrar',
        aircraft: 'Aeronave',
        airline: 'Companhia',
        origin: 'Origem',
        destination: 'Destino',
        showAvailableOnly: 'Mostrar apenas voos disponíveis',
        reset: 'Resetar os filtros',
        apply: 'Aplicar os filtros'
      },
      error: {
        noFlightsFound: {
          title: 'Parece que já não há mais nada para você aqui...',
          subtitle: 'Esses dados podem não existir no nosso sistema, verifique os filtros aplicados ou tente novamente mais tarde.'
        },
        unableToBook: {
          title: 'Não foi possível agendar esse voo...',
          subtitle: 'Esses dados podem não existir no nosso sistema ou já foram reservados por outro piloto.'
        },
      } 
    },
    notification: {
      scheduleConfirmation: {
        title: 'Tem certeza que quer agendar o voo?',
        subtitle: 'Antes de confirmar o agendamento, verifique com atenção todos os detalhes do voo e se ele é o voo desejado.',
        alert: 'Agendar não significa que a reserva foi confirmada, mas que o status do seu voo constará como scheduled. Você deverá confirmar a reserva entre sete e três dias antes da data do evento – seu agendamento será cancelado se você não confirmar o voo até 72 horas antes do horário do voo.',
        button: 'Agendar'
      },
      scheduled: {
        title: 'Voo agendado!',
        subtitle: 'Você deverá confirmar a reserva entre sete e três dias antes da data do evento – seu agendamento será cancelado se você não confirmar o voo até 72 horas antes do horário do voo.'
      },
      booked: {
        title: 'Agendamento confirmado!',
        subtitle: 'Seu voo foi confirmado com sucesso. Prepare seu plano de voo e sua aeronave, assegure-se de cumprir com o slot designado e, mais importante: divirta-se!',
      },
      cancelled: {
        title: 'Agendamento cancelado!',
        subtitle: 'Seu voo foi cancelado. Estamos tristes em vê-lo partir. Quem sabe em uma próxima oportunidade?'
      }
    },
    myFlights: {
      title: 'Meus voos',
      subtitle: 'Visualize seus agendamentos',
      search: 'Buscar agendamento',
      pilotBriefing: {
        title: 'Briefing do Piloto',
        description: 'Este documento objetiva orientar os pilotos e tripulação sobre os procedimentos específicos esperados para este evento. A leitura é fundamental.',
      },
      boardingPass: {
        cancelFlight: 'Cancelar voo',
        confirmFlight: 'Confirmar voo',
        disclaimer: 'Para participar do evento você deve estar ciente e disposto a cumprir todas as orientações disponíveis no briefing do piloto'
      }
    }
  },
};

export default ptBrTranslations;