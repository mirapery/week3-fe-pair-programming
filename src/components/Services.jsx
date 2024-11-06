import { services } from '../data'
import Title from './Title'
import Service from './Service'

const Services = () => {
  return (
    <section className='section services' id='services'>
      <Title title='our' subTitle='services' />

      <div className='section-center services-center'>
        {services.map((service) => {
          return <Service {...service} key={service.id} />
        })}
      </div>
    </section>
  )
}

{/* Alternative option
  <div className='section-center services-center'>
{services.map((service) => {
  return (
    <Service
      icon={service.icon}
      title={service.title}
      text={service.text}
      key={service.id}
    />
  );
})}
</div>
*/}

export default Services