import { Link } from 'react'

function Header() {
    return (
        <div>

            <nav>
                <Link>
                    <img src="/logo.png" />

                </Link>

                <Button variant ="outline">Login </Button>
            </nav>

        </div>
    )
}

export default Header