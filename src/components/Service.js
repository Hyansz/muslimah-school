import Logo from "./../assets/wa-logo.png"

export default function Service () {
    return (
        <div className="w-11/12 m-auto py-4 sm:py-10" id="cs" data-aos="fade-up" data-aos-duration="3000">
            <p className="text-3xl text-center mb-10">Customer Service</p>
            {/* <p className="text-center text-xl w-10/12 m-auto">Menberikan pelayanan selama 12 jam</p> */}
            <div className="bg-green-500 text-white align-middle rounded-xl p-10 shadow-2xl">
                <div className="flex align-middle sm:justify-between sm:px-20 py-10 flex-col sm:flex-row sm:text-left gap-20 text-center">
                    <div className="order-2 sm:order-1">
                        <p className="text-xl my-2">Anda Punya Pertanyaan?</p>
                        <p className="text-3xl my-3 sm:mb-8 mb-10">Hubungi CS Kami</p>
                        <a href="whatsapp://send?text=Assalamu'alaikum&phone=+6281310818236" className="bg-white text-green-500 py-4 px-6 rounded-3xl">
                            <button>Hubungi CS</button>
                        </a>
                    </div>
                    <div className="order-1 sm:order-2 bg-white rounded-full align-middle self-center">
                        <img src={Logo} alt="Gambar Disini"></img>
                    </div>
                </div>
            </div>
        </div>
    )
}