import React, { useEffect, useState } from 'react';
import { Button } from 'antd';
import { connect } from 'dva';
import SearchTest from './testSearch';
import styles from './IndexPage.css';

function IndexPage(props) {
    const [count, setCount] = useState(0);
    const [a, setA] = useState(0);
    const [flag, setFlag] = useState(false);
    const btnCLick = () => {
        setCount(count + 1);
        props.dispatch({
            type: 'search/saveData',
            payload: {
                aaa: count,
            },
        });
    };

    const aClick = () => {
        const aa = a + 1;
        setA(aa);
        props.dispatch({
            type: 'search/search',
            payload: {
                a: aa,
            },
        });
    };

    // 第二个参数为空数组时，表示 didMount
    useEffect(() => {
        setFlag(true);
        return () => {
            setFlag(false);
        };
    }, []);

    // 表示仅在 count 变化时才去改变
    useEffect(() => {
        if (flag) {
            document.title = `点击了${count}次`;
            setA(4);
        }
    }, [count]);

    useEffect(() => {
        if (flag) {
            window.console.log(a);
        }
    }, [a]);

    return (
        <div className={styles.normal}>
            {count} {a}
            <Button
                onClick={(e) => {
                    btnCLick(e);
                }}
            >
                点击
            </Button>
            <Button
                onClick={(e) => {
                    aClick(e);
                }}
            >
                a点击
            </Button>
            <SearchTest count={count} a={a} />
        </div>
    );
}

IndexPage.propTypes = {};

export default connect((state) => ({
    state: state.search,
}))(IndexPage);
