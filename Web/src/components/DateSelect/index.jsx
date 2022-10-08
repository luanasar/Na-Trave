import { useState } from "react";
import { addDays, subDays, format } from 'date-fns'
import { ptBR } from 'date-fns/locale'

import { Icon } from '~/components/Icon'

export const DateSelect = () => {
    const [currentDate, setCurrentDate] = useState(new Date ('2022-11-20T00:00:00Z'))
  
    const prevDay = () => {
      const nextDate = subDays(currentDate, 1)
      setCurrentDate(nextDate)
    }
  
    const nextDay = () => {
      const nextDate = addDays(currentDate, 1)
      setCurrentDate(nextDate)
    }
  
    return (
      <div className="flex space-x-4 justify-center items-center p-4">
        <Icon name="arrowLeft" className="w-6 text-red-500" onClick={prevDay} />
        <span className="font-bold">{format(currentDate, "d 'de' MMMM",  { locale: ptBR})}</span>
        <Icon name="arrowRight" className="w-6 text-red-500" onClick={nextDay} />
      </div>
    );
  };