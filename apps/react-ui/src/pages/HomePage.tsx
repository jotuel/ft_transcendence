import { Posts } from '../components/Posts'

export function HomePage(): JSX.Element {
  return (
    <>
      <h1 className="text-4xl tracking-tight font-bold mb-8">Le Pong</h1>
      <p>
        <iframe
          id="game"
          title="Neon Pong"
          src="https://html5.gamedistribution.com/a4c67fbbc9bb4d70a26a85a91e5d12cc/?gd_sdk_referrer_url=https://www.ponggame.org/neon-pong"
          width={800}
          height={600}
          style={{ border: 0 }}
          allow="autoplay; fullscreen"
          allowFullScreen
        />
      </p>
      <h2 className="text-2xl tracking-tight font-semibold py-6 sm:py-8">High Scores</h2>
      <Posts />
    </>
  )
}
