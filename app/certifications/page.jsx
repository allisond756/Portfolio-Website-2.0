import Image from "next/image"

import { Link } from "lucide-react"

const Certifications = () => {
  return (
    <section className="min-h-screen pt-12 ">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">My Certifications</h2>
          <div className="flex flex-col">
            <div className="flex flex-row">
              <h4 className="h4 flex flex-row text-primary hover:text-rose-200"><a href="https://www.credly.com/users/allison-daniel.711856f0" target="_blank">Coding Temple Bootcamp Certifications</a></h4>
              <Link className="text-primary h-[23px] w-[23px] mt-1 pl-1" />
            </div>
              <div className="flex flex-row flex-wrap">
                <Image src='/certs/complete.png' height={175} width={175}/>
                <Image src='/certs/javascript.png' height={175} width={175}/>
                <Image src='/certs/python.png' height={175} width={175}/>
                <Image src='/certs/react.png' height={175} width={175}/>
                <Image src='/certs/flask.png' height={175} width={175}/>
                <Image src='/certs/sql.png' height={175} width={175}/>
                <Image src='/certs/nodejs.png' height={175} width={175}/>
                <Image src='/certs/html.png' height={175} width={175}/>
                <Image src='/certs/css.png' height={175} width={175}/>
              </div>
          </div>
          <div className="flex flex-col mt-7">
            <div className="flex flex-row">
              <h4 className="h4 flex flex-row text-primary hover:text-rose-200"><a href="https://www.credly.com/users/allison-daniel.711856f0" target="_blank">Coding Temple Bootcamp Certifications</a></h4>
              <Link className="text-primary h-[23px] w-[23px] mt-1 pl-1" />
            </div>
            <div>
              <Image src='/certs/googledata.png' height={300} width={300} />
            </div>
          </div>
      </div>
    </section>
  )
}

export default Certifications