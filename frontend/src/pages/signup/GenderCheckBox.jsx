const GenderCheckBox = () => {
    return (
        <div className='flex'>
            <div className="form-control">
                <label htmlFor="" className={`label gap-2 cursor-pointer`}>
                    <spanc className='label-text'>Male</spanc>
                    <input type="checkbox" className="checkbox border-slate-900" />
                </label>
            </div>
            <div>
                <div className="form-control">
                    <label htmlFor="" className={`label gap-2 cursor-pointer`}>
                        <spanc className='label-text'>Female</spanc>
                        <input type="checkbox" className="checkbox border-slate-900" />
                    </label>
                </div>
            </div>
        </div>
    )
}

export default GenderCheckBox
