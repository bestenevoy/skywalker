import fs from 'fs'
import * as cheerio from 'cheerio'
import { useRouter } from 'next/router';
import { GetStaticPropsContext } from 'next';
import { ParsedUrlQuery } from 'querystring'
import Link from 'next/link'

interface Params extends ParsedUrlQuery {
  path: string,
}

interface nodeChapter {
  title: String,
  href: any,
  childrens: nodeChapter[]
}

const parseGitNav = () => {
  const getChildrens = ($: cheerio.Cheerio) => {
    return $.children('ol').children()
  }

  const parseNode = function (index: Number, elem: cheerio.Element, $: cheerio.Root): nodeChapter {
    const nodeATag = $($(elem).children('a')[0])
    const node: nodeChapter = {
      href: nodeATag.attr('href'),
      title: nodeATag.text(),
      childrens: [] as any[],
    }
    let childrens = getChildrens($(elem))
    childrens.each((index: Number, elem: cheerio.Element) => {
      node.childrens.push(parseNode(index, elem, $))
    })
    return node
  }

  const data = fs.readFileSync('public/git/nav.xhtml')
  const html = data.toString()
  const $ = cheerio.load(html)
  // console.log($('nav').find('h2').text())
  let tree: nodeChapter[] = []
  let childrens = getChildrens($('nav'))
  childrens.each((index: Number, elem: cheerio.Element) => {
    tree.push(parseNode(index, elem, $))
  })
  return tree
}

export default function Git(props: { nav: Array<nodeChapter>, title: String }) {
  const router = useRouter();
  const { query = {} } = router || {};
  const { path = 0 } = query || {};
  // const menu  = () => JSON.stringify(props.nav)
  if(!props.nav) console.log('step2', props.nav)
  const menu = props.nav.map((i, index) => (
    <li key={index}>
      <Link
        href={i.href.replace('.xhtml', '')}
        as={"/git/" + i.href.replace('.xhtml', '')}
      >
        <a className="text-cyan-400">{i.title}</a>
      </Link>
    </li>
  ))
  return (
    <div className="w-screen">
      <div className="left-panel w-1/5">
        <ul>
          {menu}
        </ul>
      </div>
      <div className="rigth-panel w-4/5">
        <h1>
          Hello Git{path}
        </h1>
      </div>
    </div>
  )
}


export async function getStaticProps(context: GetStaticPropsContext) {
  const params = context.params as Params

  const nav = parseGitNav()
  if(!nav) console.log('step3', nav)
  return {
    props: {
      nav,
      title: params.path
    }
  }
}
// getStaticProps
export async function getStaticPaths() {
  const nav = parseGitNav()
  if(!nav) console.log('step1', nav)
  return {
    paths: nav.map(i => ({ params: { path: i.href.replace('.xhtml', '') } })),
    fallback: false,
  };
}