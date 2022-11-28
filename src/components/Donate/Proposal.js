import './Proposal.scss';

const Proposal = () => {
    // const text = '20% від замовлення передаємо на ЗСУ,'.repeat(3).split(',');
    const text = '10% від замовлення передаємо на ЗСУ 🇺🇦';

    return (
        <>
            <div className="proposal_container">
                <div className="proposal_text">
                    {/* {text.map((item, i) => {
                        return (
                            <div key={i} className='proposal_item'>
                                {item}
                            </div>
                        )
                    })} */}

                    {text}
                    
                </div>
            </div>
        </>
    )
}

export default Proposal;