import BuildsCard from "./Builds_Card.jsx";



export default function Builds(){
  const CARDS = [
      {
        title: 'Стриминг та Twitch или Youtube',
        description: [
            'Потрясающую производительность для стриминга в высоком разрешении и игр.',
            'Специально подобранные компоненты обеспечивают плавный и безупречный потоковый контент без лагов.',
            'Самый красивый и привлекательный дизайн, такой точно заметят и скинут донат.'
        ]
      },
    {
      title: 'Разработчик по/дизайнер',
      description: [
          'Творческие и компьютерные профессионалы нуждаются в высокой производительности для работы с ресурсоемкими приложениями, такими как Adobe Creative Suite или DaVinci Resolve.',
          'Мощный процессор и графическая карта с большим объемом видеопамяти позволяют быстро обрабатывать и редактировать графику и видео, а NVMe SSD обеспечивает быстрый доступ к большим файлам проектов, ускоряет загрузку проектов и операций ввода-вывода.'
      ]
    },
    {
      title: 'Научные вычисления и анализ данных',
      description: [
          'Для научных исследований и анализа данных требуются мощные вычисления. Многоядерный процессор и высокопроизводительная графика обеспечивают быстрые вычисления и обработку данных, а большой объем оперативной памяти помогает работать с большими наборами данных.'
      ]
    },
    {
      title: 'Инженер-проектировщик',
      description: [
          'Архитекторы и инженеры, работающие с CAD-программами, требуют мощных машин для обработки сложных 3D-моделей и проектов. Оптимизированные графические карты и мощный процессор ускоряют процессы отображения и манипуляции с моделями, а SSD обеспечивает быстрый доступ к проектам..'
      ]
    }
  ]
  return <main className='builds'>
    <ul className="builds__list">
      {CARDS.map(card =>(
        <BuildsCard title={card.title}
                    description={card.description}
                    imgPath={card.impPath}
        />
      ))}
    </ul>
  </main>
}