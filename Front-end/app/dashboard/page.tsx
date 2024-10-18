import Link from "next/link";

function page() {
    return (
        <div className='Dashboard default'>
            <div className="contain">
                <h1>Veuillez choisir un utilisateur</h1>

                <div className="user" data-name="Karl">
                    <Link href="/dashboard/12">Karl</Link>
                </div>

                <div className="user" data-name="Cecilia">
                    <Link href="/dashboard/18">Cecilia</Link>
                </div>

            </div>
        </div>
    );
}

export default page;