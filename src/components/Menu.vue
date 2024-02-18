
<script>
export default {
  data() {
    return {}
  },
  computed: {},
  props: {
    menu: {
      type: Array,
      default: () => []
    },
    collapsed: {
      type: Boolean,
      default: false
    }
  },
  render() {
    return(
      <a-menu selectedKeys={[this.$route.name]}
      mode="inline"
      theme="dark"
      class="siderMenu">
      {this.menu.map((menuItem) => {
        return this.renderMenuItem(menuItem);
      })}  
      </a-menu>
    )
  },
  methods: {
    renderMenuItem(menuItem) {
      if(menuItem.hidden) {
        return null;
      }
      if(menuItem.children && !menuItem.hideChildrenInMenu) {
        return(
          <a-sub-menu key={menuItem.name}>
            <span slot="title">
              {this.renderIcon(menuItem.meta.icon)}
              <span>{menuItem.meta.title}</span>
            </span>
          {menuItem.children.map((SubMenuItem) => {
            return this.renderMenuItem(SubMenuItem);
          })}
          </a-sub-menu>
        )
      }else {
        return(
          <a-menu-item onClick={() => this.menuClick(menuItem)} key={menuItem.name}>
          {this.renderIcon(menuItem.meta.icon)}
          <span>{menuItem.meta.title}</span>
          </a-menu-item>
        )
      }
    },
    renderIcon(icon) {
      if(icon === 'none' || icon === undefined) {
        return null;
      }
      const props = {};
      typeof (icon) === 'object' ? props.component = icon : props.type = icon;
      return (<a-icon {...props} />)
    },
    //路由跳转   
    menuClick(route) {
      this.$router.push({name:route.name});
    }
  }
}
</script>

<style>
.siderMenu{
  height:100vh;

}
</style>