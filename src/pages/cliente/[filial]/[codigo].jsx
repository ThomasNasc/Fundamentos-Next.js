import React from 'react';
import Layout from '../../../components/Layout';
import {useRouter} from 'next/router'
function ClientePorCodigo(props) {
    const router = useRouter()
    return (
        <div>
            <Layout titulo='Navegação Dinâmica'>
                <div>Codigo - {router.query.codigo}</div>
                <div>Filial - {router.query.filial}</div>
            </Layout>
        </div>
    );
}

export default ClientePorCodigo;