import { motion } from 'framer-motion';
import Link from 'next/link';

function Achievements() {
  const achievements = [
    {
      title: 'FreeLancing',
      description: 'Made a trading platform which connects to the finvesia api, which provides the  stock information and also makes easy for user to place order,  which allows user to connect securly.',

    },
    {
      title: 'FreeLancing',
      description: 'Made a landing Page for client’s workshop event. Integrated the payment method for client so that user can register themseleves for workshop.',

    },
    {
      title: 'Leadership Award',
      description: 'Received the Leadership Award for successfully leading a cross-functional team on a complex project while I was in  unschool internship.',
    },
  ];
  return (
    <motion.div 
  
    initial={{ opacity: 0 ,y:-200}}
          
              whileInView={{ opacity: 1 , y:0 }}
              transition={{ duration: 1.8, delay: 0.4, ease: 'easeOut' }}
    className="bg-[rgb(36,36,36)] py-16 ">
      <div className="container mx-auto px-4">
        <h2 className=" flex justify-center uppercase tracking-[20px]  text-2xl  text-gray-500 mb-8">Achievements</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="bg-[rgb(36,36,36)] rounded-lg  shadow-red-400 hover:shadow-blue-300 shadow p-6 text-gray-500"
             
            >
              <h3 className="text-xl font-semibold ">{achievement.title}</h3>


              <p className=" mt-2">{achievement.description}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default Achievements
