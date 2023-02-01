import React, { createContext, useContext, useState } from 'react';

import { ContextApi } from '@hooks/authContext';

import { IRegisterCompany } from '@utils/interfaces/interfaceRegisterCompany';
import connectionApi from '../services/controllerApi';

const ContextRegisterCompany = createContext<IRegisterCompany>({} as IRegisterCompany);

function RegisterCompanyProvider({children} :IRegisterCompany) {
    const { token, establishment } = useContext(ContextApi);
    const [ name, setName ] = useState<string>();
    const [ whatsapp, setWhatsapp ] = useState();
    const [ open_on_weekends, setOpenOnWeekends] =  useState(true);
    const [ images, setImages] =  useState([]);
    const [ industry, setIndustry] = useState({
        type1: "Carros",
        type2: "Motos",
    });
    const [opening_hours, setOpeningHours] = useState({
        hour1: 'Das 8h às 17h',
        hour2: 'Das 9h às 18h'
    });

    async function registerCompany() {
        const data = new FormData();

        data.append("name", name);
        data.append("whatsapp", whatsapp);
        data.append("industry", industry);
        data.append("latitude", String(latitude));
        data.append("longitude", String(longitude));
        data.append("opening_hours", String(opening_hours));
        data.append("open_on_weekends", open_on_weekends);

        images.forEach((image, index) => {
            data.append("images", {
                name: `image_${index}.jpg`,
                type: "image/jpg",
                url: image
            });
        });

        await connectionApi.post("/company", data, {
            headers: {
                Token: `Bearer ${token}`,
                Authorization: establishment.id
            }
        })
    }

    return (
        <ContextRegisterCompany.Provider
            value={{
                registerCompany
            }}
        >
            {children}
        </ContextRegisterCompany.Provider>
    )
}

export {RegisterCompanyProvider, ContextRegisterCompany}
