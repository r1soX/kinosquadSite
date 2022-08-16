import { FC } from 'react'
import classNames from 'classnames'
import Image from 'next/image'
import styles from './Logo.module.scss'
import Link from 'next/link'

interface LogoProps {
	className?: string
}

export const Logo: FC<LogoProps> = ({ className }) => {
	return (
		<Link href='/'>
			<a
				className={classNames(styles.logo, className)}
				style={{ fontWeight: '800', fontSize: '24px' }}
			>
				<span style={{ color: 'white' }}>KINO</span>
				<span style={{ color: '#0a85cb' }}>SQUAD</span>
			</a>
		</Link>
	)
}
