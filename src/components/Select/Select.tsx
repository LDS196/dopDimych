import React, {useState, KeyboardEvent, useEffect} from 'react';
import styles from './Select.module.css'

export type ItemType = {
    title: string
    value: any
}
export type SelectType = {
    value?: string
    onChange: (value: any) => void
    items: ItemType[]
}

export const Select = (props: SelectType) => {
    const [active, setActive] = useState(false)
    let [hoveredItemValue, setHoveredItemValue] = useState(props.value)

    useEffect(() => {
        setHoveredItemValue(props.value)
    }, [props.value])

    const selectedItem = props.items.find(el => el.value === props.value)
    const toggleItems = () => {
        setActive(!active)
    }
    const hoveredItem = (value: any) => {
        setHoveredItemValue(value)
    }
    const onItemClick = (value: any) => {
        props.onChange(value);
        toggleItems()
    }

    const onKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {

        if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
            for (let i = 0; i < props.items.length; i++) {
                if (props.items[i].value === hoveredItemValue) {
                    const pretendentElement = e.key === 'ArrowDown'
                        ? props.items[i + 1]
                        : props.items[i - 1]
                    if (pretendentElement) {
                        props.onChange(pretendentElement.value)
                        return;
                    }
                }
            }
            if(!selectedItem){
                props.onChange(props.items[0].value)
            }

        }
        if (e.key === 'Enter' || e.key === 'Escape') {
            setActive(!active)
        }
    }

    return (<>
            <div className={styles.select} onKeyUp={onKeyUp} tabIndex={0}>

                <span className={styles.main} onClick={toggleItems}>{selectedItem && selectedItem.title}</span>
                {
                    active &&
                    <div className={styles.items}>
                        {props.items.map(i => <div
                            className={styles.item + ' ' + (hoveredItemValue === i.value ? styles.selected : '')}
                            onMouseEnter={() => hoveredItem(i.value)}
                            onClick={() => onItemClick(i.value)}
                            key={i.value}>{i.title}</div>)}
                    </div>
                }

            </div>
        </>
    );
};

