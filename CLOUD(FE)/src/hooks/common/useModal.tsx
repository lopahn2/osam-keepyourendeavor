import react, {useEffect, useState} from 'react';

export default function useModal(){
    const modals = {
        addIssue: 'addIssue',
        deleteIssue: 'deleteIssue',
        addNotice: 'addNotice',
        resultNotice: 'resultNotice',
        deleteNotice: 'deleteNotice'
    }

    const [open, setOpen] = useState({
        [modals.addIssue]: false,
        [modals.addNotice]: false,
        [modals.deleteIssue]: false,
        [modals.resultNotice]: false,
        [modals.deleteNotice]: false,
    });

    const [id, setId] = useState();

    const onClickModal = (name, id?) => {
        if(id){
            setId(id)
        }
        setOpen({
            ...open,
            [name] : !open[name]
        });
    }

    return {
        open, setOpen, onClickModal, modals, id
    }
}