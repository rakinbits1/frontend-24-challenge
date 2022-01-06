import React from 'react';
import Head from 'next/head'
import DocuSign from '../src/components/catagory/DocuSign';

const documentSign = () => {
    return (
        <div>
            <Head>
                <title>Document</title>
            </Head>
            
            <DocuSign />
            
        </div >
    );
};

export default documentSign;