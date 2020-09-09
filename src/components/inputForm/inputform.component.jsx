import React from "react";
import moment from "moment";
import { connect } from "react-redux";

import "antd/dist/antd.css";
import "./inputform.styles.scss";
import { Form, Input, Button, DatePicker } from "antd";
import { postTweet } from "../../redux/tweet/tweet.actions";

const Inputform = ({ postTweet }) => {
  const onFinish = (values) => {
    console.log("Success:", values);
    this.props.postTweet({
      tweet: values.tweet,
      expiryDate: values.expiryDate,
    });
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const disabledDate = (current) => {
    // Can not select days before today and today
    return current && current < moment().endOf("day");
  };

  return (
    <div className="form-container">
      <Form name="basic" onFinish={onFinish} onFinishFailed={onFinishFailed}>
        <Form.Item
          label="Tweet"
          name="tweet"
          rules={[
            {
              required: true,
              message: "Tweet here!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item label="DatePicker" name="expiryDate">
          <DatePicker
            disabledDate={disabledDate}
            format="YYYY-MM-DD HH:mm:ss"
          />
        </Form.Item>
        <Button type="primary" htmlType="submit">
          Tweet
        </Button>
      </Form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  postTweet: (tweet) => dispatch(postTweet(tweet)),
});

export default connect(null, mapDispatchToProps)(Inputform);
